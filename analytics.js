
const GA_ID = 'G-3PR2C4CTBX';

if (GA_ID && !GA_ID.includes('XXXX')) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID, {
        anonymize_ip: true,          // drop the last octet of visitor IPs
        allow_google_signals: false, // no cross-device/advertising profiles
        allow_ad_personalization_signals: false
    });
}
