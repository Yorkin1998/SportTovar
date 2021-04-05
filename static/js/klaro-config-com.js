var translations_en = cookieTranslations.en;
var translations_sk = cookieTranslations.sk;
var translations_sl = cookieTranslations.sl;
var translations_fr = cookieTranslations.fr;
var translations_hr = cookieTranslations.hr;
var translations_it = cookieTranslations.it;
var translations_nl = cookieTranslations.nl;
/*

Notwendig [required]: Diese Cookies sind für eine gute Funktionalität unserer Website erforderlich und können in unserem System nicht ausgeschaltet werden.
Performance [performance]: Wir verwenden diese Cookies, um statistische Informationen über unsere Website bereitzustellen. Sie werden zur Leistungsmessung und -verbesserung verwendet.
Funktional [functional]: Wir verwenden diese Cookies, um die Funktionalität zu verbessern und die Personalisierung zu ermöglichen, beispielsweise Live-Chats, Videos und die Verwendung von sozialen Medien.
Werbung [advertising]: Diese Cookies werden von unseren Werbepartnern auf unserer Website gesetzt.
*/


var klaroConfig = {
    elementID: 'cookieconsent',
    cookieName: '3mo_cookieconsent',
    storageMethod: 'cookie',
    privacyPolicy: {
        default: '/legal/data-privacy',
        sk: '/sk/legal/data-privacy',
        sl: '/sl/legal/data-privacy',
        fr: '/fr/legalement/politique-de-confidentialite',
        hr: '/hr/legal/data-privacy',
        it: '/hr/legal/data-privacy',
        nl: '/nl/wettelijk/data-privacy',
    },
    lang: currentLang,
    poweredBy:
        'https://www.3mo.de',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: true,
    translations: {
        en: {
            acceptSelected: translations_en.cookie_accept_selected,
            ok: translations_en.cookie_ok,
            save: translations_en.cookie_save,
            decline: translations_en.cookie_decline,
            close: translations_en.cookie_close,
            acceptAll: translations_en.cookie_accept_all,
            poweredBy: translations_en.cookie_powered_by,
            app:{
                disableAll:{
                    title: translations_en.cookie_disable_all_title,
                    description: translations_en.cookie_disable_all_description,
                },
                optOut:{
                    title: translations_en.cookie_optout_title,
                    description: translations_en.cookie_optout_description,
                },
                required:{
                    title: translations_en.cookie_required_title,
                    description: translations_en.cookie_required_description,
                },
                purposes: translations_en.cookie_purposes,
                purpose: translations_en.cookie_purpose,
            },
            consentModal:{
                title: translations_en.cookie_title,
                description: translations_en.cookie_description,
                privacyPolicy: {
                    name: translations_en.cookie_privacy_name,
                    text: translations_en.cookie_privacy_text,
                },
            },
            consentNotice:{
                changeDescription: translations_en.cookie_consent_notice_change_description,
                description: translations_en.cookie_consent_notice_description,
                learnMore: translations_en.cookie_consent_notice_settings,
            },
            purposes:{
                required: translations_en.cookie_purpose_required,
                performance: translations_en.cookie_purpose_performance,
                functional: translations_en.cookie_purpose_functional,
                advertising: translations_en.cookie_purpose_advertising,
            },
            required: {
                description: translations_en.cookie_required_description,
            },
            performance: {
                description: translations_en.cookie_performance_description,
            },
            functional: {
                description: translations_en.cookie_functional_description,
            },
            advertising: {
                description: translations_en.cookie_advertising_description,
            },
        },
        sk: {
            acceptSelected: translations_sk.cookie_accept_selected,
            ok: translations_sk.cookie_ok,
            save: translations_sk.cookie_save,
            decline: translations_sk.cookie_decline,
            close: translations_sk.cookie_close,
            acceptAll: translations_sk.cookie_accept_all,
            poweredBy: translations_sk.cookie_powered_by,
            app:{
                disableAll:{
                    title: translations_sk.cookie_disable_all_title,
                    description: translations_sk.cookie_disable_all_description,
                },
                optOut:{
                    title: translations_sk.cookie_optout_title,
                    description: translations_sk.cookie_optout_description,
                },
                required:{
                    title: translations_sk.cookie_required_title,
                    description: translations_sk.cookie_required_description,
                },
                purposes: translations_sk.cookie_purposes,
                purpose: translations_sk.cookie_purpose,
            },
            consentModal:{
                title: translations_sk.cookie_title,
                description: translations_sk.cookie_description,
                privacyPolicy: {
                    name: translations_sk.cookie_privacy_name,
                    text: translations_sk.cookie_privacy_text,
                },
            },
            consentNotice:{
                changeDescription: translations_sk.cookie_consent_notice_change_description,
                description: translations_sk.cookie_consent_notice_description,
                learnMore: translations_sk.cookie_consent_notice_settings,
            },
            purposes:{
                required: translations_sk.cookie_purpose_required,
                performance: translations_sk.cookie_purpose_performance,
                functional: translations_sk.cookie_purpose_functional,
                advertising: translations_sk.cookie_purpose_advertising,
            },
            required: {
                description: translations_sk.cookie_required_description,
            },
            performance: {
                description: translations_sk.cookie_performance_description,
            },
            functional: {
                description: translations_sk.cookie_functional_description,
            },
            advertising: {
                description: translations_sk.cookie_advertising_description,
            },
        },
        sl: {
            acceptSelected: translations_sl.cookie_accept_selected,
            ok: translations_sl.cookie_ok,
            save: translations_sl.cookie_save,
            decline: translations_sl.cookie_decline,
            close: translations_sl.cookie_close,
            acceptAll: translations_sl.cookie_accept_all,
            poweredBy: translations_sl.cookie_powered_by,
            app:{
                disableAll:{
                    title: translations_sl.cookie_disable_all_title,
                    description: translations_sl.cookie_disable_all_description,
                },
                optOut:{
                    title: translations_sl.cookie_optout_title,
                    description: translations_sl.cookie_optout_description,
                },
                required:{
                    title: translations_sl.cookie_required_title,
                    description: translations_sl.cookie_required_description,
                },
                purposes: translations_sl.cookie_purposes,
                purpose: translations_sl.cookie_purpose,
            },
            consentModal:{
                title: translations_sl.cookie_title,
                description: translations_sl.cookie_description,
                privacyPolicy: {
                    name: translations_sl.cookie_privacy_name,
                    text: translations_sl.cookie_privacy_text,
                },
            },
            consentNotice:{
                changeDescription: translations_sl.cookie_consent_notice_change_description,
                description: translations_sl.cookie_consent_notice_description,
                learnMore: translations_sl.cookie_consent_notice_settings,
            },
            purposes:{
                required: translations_sl.cookie_purpose_required,
                performance: translations_sl.cookie_purpose_performance,
                functional: translations_sl.cookie_purpose_functional,
                advertising: translations_sl.cookie_purpose_advertising,
            },
            required: {
                description: translations_sl.cookie_required_description,
            },
            performance: {
                description: translations_sl.cookie_performance_description,
            },
            functional: {
                description: translations_sl.cookie_functional_description,
            },
            advertising: {
                description: translations_sl.cookie_advertising_description,
            },
        },
        fr: {
            acceptSelected: translations_fr.cookie_accept_selected,
            ok: translations_fr.cookie_ok,
            save: translations_fr.cookie_save,
            decline: translations_fr.cookie_decline,
            close: translations_fr.cookie_close,
            acceptAll: translations_fr.cookie_accept_all,
            poweredBy: translations_fr.cookie_powered_by,
            app:{
                disableAll:{
                    title: translations_fr.cookie_disable_all_title,
                    description: translations_fr.cookie_disable_all_description,
                },
                optOut:{
                    title: translations_fr.cookie_optout_title,
                    description: translations_fr.cookie_optout_description,
                },
                required:{
                    title: translations_fr.cookie_required_title,
                    description: translations_fr.cookie_required_description,
                },
                purposes: translations_fr.cookie_purposes,
                purpose: translations_fr.cookie_purpose,
            },
            consentModal:{
                title: translations_fr.cookie_title,
                description: translations_fr.cookie_description,
                privacyPolicy: {
                    name: translations_fr.cookie_privacy_name,
                    text: translations_fr.cookie_privacy_text,
                },
            },
            consentNotice:{
                changeDescription: translations_fr.cookie_consent_notice_change_description,
                description: translations_fr.cookie_consent_notice_description,
                learnMore: translations_fr.cookie_consent_notice_settings,
            },
            purposes:{
                required: translations_fr.cookie_purpose_required,
                performance: translations_fr.cookie_purpose_performance,
                functional: translations_fr.cookie_purpose_functional,
                advertising: translations_fr.cookie_purpose_advertising,
            },
            required: {
                description: translations_fr.cookie_required_description,
            },
            performance: {
                description: translations_fr.cookie_performance_description,
            },
            functional: {
                description: translations_fr.cookie_functional_description,
            },
            advertising: {
                description: translations_fr.cookie_advertising_description,
            },
        },
        hr: {
            acceptSelected: translations_hr.cookie_accept_selected,
            ok: translations_hr.cookie_ok,
            save: translations_hr.cookie_save,
            decline: translations_hr.cookie_decline,
            close: translations_hr.cookie_close,
            acceptAll: translations_hr.cookie_accept_all,
            poweredBy: translations_hr.cookie_powered_by,
            app:{
                disableAll:{
                    title: translations_hr.cookie_disable_all_title,
                    description: translations_hr.cookie_disable_all_description,
                },
                optOut:{
                    title: translations_hr.cookie_optout_title,
                    description: translations_hr.cookie_optout_description,
                },
                required:{
                    title: translations_hr.cookie_required_title,
                    description: translations_hr.cookie_required_description,
                },
                purposes: translations_hr.cookie_purposes,
                purpose: translations_hr.cookie_purpose,
            },
            consentModal:{
                title: translations_hr.cookie_title,
                description: translations_hr.cookie_description,
                privacyPolicy: {
                    name: translations_hr.cookie_privacy_name,
                    text: translations_hr.cookie_privacy_text,
                },
            },
            consentNotice:{
                changeDescription: translations_hr.cookie_consent_notice_change_description,
                description: translations_hr.cookie_consent_notice_description,
                learnMore: translations_hr.cookie_consent_notice_settings,
            },
            purposes:{
                required: translations_hr.cookie_purpose_required,
                performance: translations_hr.cookie_purpose_performance,
                functional: translations_hr.cookie_purpose_functional,
                advertising: translations_hr.cookie_purpose_advertising,
            },
            required: {
                description: translations_hr.cookie_required_description,
            },
            performance: {
                description: translations_hr.cookie_performance_description,
            },
            functional: {
                description: translations_hr.cookie_functional_description,
            },
            advertising: {
                description: translations_hr.cookie_advertising_description,
            },
        },
        it: {
            acceptSelected: translations_it.cookie_accept_selected,
            ok: translations_it.cookie_ok,
            save: translations_it.cookie_save,
            decline: translations_it.cookie_decline,
            close: translations_it.cookie_close,
            acceptAll: translations_it.cookie_accept_all,
            poweredBy: translations_it.cookie_powered_by,
            app:{
                disableAll:{
                    title: translations_it.cookie_disable_all_title,
                    description: translations_it.cookie_disable_all_description,
                },
                optOut:{
                    title: translations_it.cookie_optout_title,
                    description: translations_it.cookie_optout_description,
                },
                required:{
                    title: translations_it.cookie_required_title,
                    description: translations_it.cookie_required_description,
                },
                purposes: translations_it.cookie_purposes,
                purpose: translations_it.cookie_purpose,
            },
            consentModal:{
                title: translations_it.cookie_title,
                description: translations_it.cookie_description,
                privacyPolicy: {
                    name: translations_it.cookie_privacy_name,
                    text: translations_it.cookie_privacy_text,
                },
            },
            consentNotice:{
                changeDescription: translations_it.cookie_consent_notice_change_description,
                description: translations_it.cookie_consent_notice_description,
                learnMore: translations_it.cookie_consent_notice_settings,
            },
            purposes:{
                required: translations_it.cookie_purpose_required,
                performance: translations_it.cookie_purpose_performance,
                functional: translations_it.cookie_purpose_functional,
                advertising: translations_it.cookie_purpose_advertising,
            },
            required: {
                description: translations_it.cookie_required_description,
            },
            performance: {
                description: translations_it.cookie_performance_description,
            },
            functional: {
                description: translations_it.cookie_functional_description,
            },
            advertising: {
                description: translations_it.cookie_advertising_description,
            },
        },
        nl: {
            acceptSelected: translations_nl.cookie_accept_selected,
            ok: translations_nl.cookie_ok,
            save: translations_nl.cookie_save,
            decline: translations_nl.cookie_decline,
            close: translations_nl.cookie_close,
            acceptAll: translations_nl.cookie_accept_all,
            poweredBy: translations_nl.cookie_powered_by,
            app:{
                disableAll:{
                    title: translations_nl.cookie_disable_all_title,
                    description: translations_nl.cookie_disable_all_description,
                },
                optOut:{
                    title: translations_nl.cookie_optout_title,
                    description: translations_nl.cookie_optout_description,
                },
                required:{
                    title: translations_nl.cookie_required_title,
                    description: translations_nl.cookie_required_description,
                },
                purposes: translations_nl.cookie_purposes,
                purpose: translations_nl.cookie_purpose,
            },
            consentModal:{
                title: translations_nl.cookie_title,
                description: translations_nl.cookie_description,
                privacyPolicy: {
                    name: translations_nl.cookie_privacy_name,
                    text: translations_nl.cookie_privacy_text,
                },
            },
            consentNotice:{
                changeDescription: translations_nl.cookie_consent_notice_change_description,
                description: translations_nl.cookie_consent_notice_description,
                learnMore: translations_nl.cookie_consent_notice_settings,
            },
            purposes:{
                required: translations_nl.cookie_purpose_required,
                performance: translations_nl.cookie_purpose_performance,
                functional: translations_nl.cookie_purpose_functional,
                advertising: translations_nl.cookie_purpose_advertising,
            },
            required: {
                description: translations_nl.cookie_required_description,
            },
            performance: {
                description: translations_nl.cookie_performance_description,
            },
            functional: {
                description: translations_nl.cookie_functional_description,
            },
            advertising: {
                description: translations_nl.cookie_advertising_description,
            },
        },
    },
    apps: [
        {
            name: 'required',
            title: 'Necessary',
            purposes: ['required'],
            required: true
        },
        {
            name: 'functional',
            title: 'Functional',
            purposes: ['functional'],
            default: false,
            required: false,
            callback: function (consent, app) {
                if (consent !== false) {
                    dataLayer.push({'event': 'cc_consent_functional'})
                }
            },
        },
        {
            name: 'performance',
            title: 'Performance',
            purposes: ['performance'],
            default: false,
            required: false,
            callback: function (consent, app) {
                if (consent !== false) {
                    dataLayer.push({'event': 'cc_consent_performance'})
                }
            },
        },
        {
            name: 'advertising',
            title: 'Marketing',
            purposes: ['advertising'],
            default: false,
            required: false,
            callback: function (consent, app) {
                if (consent !== false) {
                    dataLayer.push({'event': 'cc_consent_advertising'})
                }
            },
        }
    ],
};
if (typeof klaroConfigTranslations !== 'undefined') {
    for (var attr in klaroConfigTranslations) {
        klaroConfig[attr] = klaroConfigTranslations[attr];
    }
}
