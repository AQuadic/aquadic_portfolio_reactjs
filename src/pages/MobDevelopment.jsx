import PagesHeader from "@/components/general/PagesHeader"
import MobileDevelopment from '../components/Services/MobileDevelopment'
import { useTranslation } from "react-i18next";
import "../components/Hooks/i18n";

const MobDevelopment = () => {
    const { t } = useTranslation("mobDevelopment");
    return (
        <div>
            <PagesHeader
                fheader={t('mobile')}
                sheader={t('app')}
                title="Get your Android & iOS mobile apps in one go. We Mainly using Google Flutter Also, we have experience integrating native and hybrid mobile apps to create both Android and iOS native apps in one development cycle, saving up resources for maintenance and development."
            />
            <MobileDevelopment />
        </div>
    )
}

export default MobDevelopment
