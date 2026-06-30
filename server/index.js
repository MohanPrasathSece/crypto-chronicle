import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/leads', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    const [first_name, ...lastNameParts] = (name || "Unknown").trim().split(" ");
    const last_name = lastNameParts.length > 0 ? lastNameParts.join(" ") : "Lead";

    let formattedPhone = (phone || "").replace(/[^0-9+]/g, '');
    if (formattedPhone) {
      if (formattedPhone.startsWith('+')) {
        formattedPhone = '00' + formattedPhone.slice(1);
      }
      if (formattedPhone.startsWith('41') && formattedPhone.length === 11) {
        formattedPhone = '00' + formattedPhone;
      }
      if (!formattedPhone.startsWith('0041')) {
        if (formattedPhone.startsWith('0') && !formattedPhone.startsWith('00')) {
          formattedPhone = '0041' + formattedPhone.slice(1);
        } else if (!formattedPhone.startsWith('00')) {
          formattedPhone = '0041' + formattedPhone;
        }
      }
    } else {
      formattedPhone = "0000000000";
    }

    const payload = {
      country_name: "ch",
      description: message || "Signup Lead",
      phone: formattedPhone,
      email: email || "",
      first_name: first_name,
      last_name: last_name,
      custom_fields: {
        Source_ID: "website",
        How_Much_Invested: "0",
        Outline_Your_Case: message || ""
      }
    };

    const crmUrl = process.env.CRM_API_URL || 'https://inwo.crmcore.me/api/lead_management/api/affiliates';
    const crmToken = process.env.CRM_API_TOKEN;

    if (!crmToken) {
      console.error('CRM_API_TOKEN is not configured in .env');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const response = await fetch(crmUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${crmToken}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('CRM API Error:', errorText);
      return res.status(response.status).json({ error: 'Failed to submit lead to CRM' });
    }

    const responseData = await response.json();
    return res.status(200).json({ success: true, data: responseData });
  } catch (error) {
    console.error('Internal Server Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
