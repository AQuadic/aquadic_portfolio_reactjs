import PagesHeader from "@/components/general/PagesHeader"
import WebDevelopement from "@/components/Services/WebDevelopement"
import { useTranslation } from "react-i18next";
import "../components/Hooks/i18n";

const WebDevelopment = () => {
    const { t } = useTranslation("webDevelopment");
    return (
        <div>
            <PagesHeader
                fheader={t('web')}
                sheader={t('dev')}
                title={t('webTilte')}
            />
            <WebDevelopement />
        </div>
    )
}

export default WebDevelopment
