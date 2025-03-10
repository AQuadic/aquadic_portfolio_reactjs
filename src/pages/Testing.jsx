import PagesHeader from "@/components/general/PagesHeader"
import SoftwareTesting from "@/components/Services/SoftwareTesting"
import { useTranslation } from "react-i18next";
import "../components/Hooks/i18n";

const Testing = () => {
    const { t } = useTranslation("testing");
    return (
        <div>
            <PagesHeader
                fheader={t('software')}
                sheader={t('testing')}
                title={t('testingTitle')}
            />
            <SoftwareTesting />
        </div>
    )
}

export default Testing
