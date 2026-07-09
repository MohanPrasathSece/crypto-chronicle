export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;
    
    // Split name into first and last
    const nameParts = (name || '').trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    
        let finalPhone = (leadData.number || leadData.phone || "").replace(/[^0-9+]/g, '');
        if (finalPhone && finalPhone.startsWith('+')) {
            finalPhone = '00' + finalPhone.slice(1);
        }
        let countryName = leadData.countryCode ? leadData.countryCode.toLowerCase() : "ch";

        const payload = {
      country_name: "cy",
      description: "Monde Quotidien",
      phone: phone || "",
      email: email || "",
      first_name: firstName,
      last_name: lastName,
      custom_fields: {
        Source_ID: "Website",
        Outline_Your_Case: message || ""
      }
    };

    const crmUrl = process.env.CRM_API_URL || 'https://inwo.crmcore.me/api/lead_management/api/affiliates';
    const crmToken = process.env.CRM_API_TOKEN;

    if (!crmToken) {
      console.error('CRM_API_TOKEN is not configured in environment variables');
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
    return 
    // Sync to dashboard
    try {
      const url = (typeof process !== 'undefined' && process.env && process.env.VITE_DASHBOARD_URL) || "https://lead-dashboard-orcin.vercel.app/api/increment";
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ website: "Monde Quotidien", type: "signup", name: name, email: email})
      }).catch(() => {});
    } catch(e){}

    // Fire-and-forget: increment leads count
    try {
      const host = req.headers.host || "localhost:3000";
      const protocol = host.startsWith("localhost") ? "http" : "https";
      fetch(`${protocol}://${host}/api/leads-count`, { method: "POST" }).catch((err) =>
        console.warn("[leads-count] Failed to increment:", err)
      );
    } catch (e) {
      console.warn("[leads-count] Error triggering increment:", e);
    }

    res.status(200).json({ success: true, data: responseData });
  } catch (error) {
    console.error('Internal Server Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
