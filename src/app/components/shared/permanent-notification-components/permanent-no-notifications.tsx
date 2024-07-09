import { useLocalizer } from "src/app/core/Localization";
import iconNotif from "src/app/assets/image-octopusfx/icon_empty_notification.svg";

const PermanentNoNotifications = () => {
  const commonLocalizer = useLocalizer("Common-ResCommon");
  return (
    <div className="text-center mx-auto py-4 px-2 notification-empty w-full">
      <p className="text-center text-lg text-gray-500">
        <img src={iconNotif} className="w-1/5 mx-auto" alt={commonLocalizer("MODULE_COMMON_NOTIFICATIONS_NO_NEW_NOTIFICATIONS")}/>
      </p>
      <h1 className="text-center text-xs text-gray-500 mt-2">
        {commonLocalizer("MODULE_COMMON_NOTIFICATIONS_NO_NEW_NOTIFICATIONS")}
      </h1>
    </div>
  );
};

export default PermanentNoNotifications;
