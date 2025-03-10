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
                title={t('mobTitle')}
            />
            <MobileDevelopment />
        </div>
    )
}

export default MobDevelopment
