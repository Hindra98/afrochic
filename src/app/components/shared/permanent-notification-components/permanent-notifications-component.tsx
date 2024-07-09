import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import itemNotification from "./permanent-notification-item";
import { Dispatch, lazy, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/app/core/hooks/core-hooks";
import { deletePermanentNotificationMessages, markAsReadPermanentNotificationMessages, setNotificationItemStatus } from "src/app/store-management/actions/permanent-notification-message/permanent-notification-actions";
import { ShimmerText } from "../shimmer";
import "../../../styles/layouts/_notifications-core-layout.scss";
import { useLocalizer } from "src/app/core/Localization";

const PermanentNoNotifications = lazy(() => import("./permanent-no-notifications"));
const PermanentNotificationComponentToolsbar = lazy(() => import("./permanent-notification-component-toolsbar"));

type Props = { close: Dispatch<SetStateAction<boolean>> }

const PermanentNotificationsComponent = ({close}: Props) => {
  const commonLocalizer = useLocalizer("Common-ResCommon");
  
  const dispatch = useAppDispatch();
  const permanentNotification = useAppSelector((state) => state.permanentNotification);
  const checkedLength = useAppSelector(state => state.notification.length)
  const [dataSource, setDataSource] = useState<{ [key: string]: PermanentNotificationItem }[]>(null);
  const [source, setSource] = useState<{ [key: string]: PermanentNotificationItem }[]>(dataSource);
  const [checkAll, setCheckAll] = useState(false);
  const [getUne, setGetUne] = useState(false);
  const [filter, setFilter] = useState<number>(0);

  const checkAllNotification = () => {
    if (checkAll) setCheckAll(true);
    else setCheckAll(false);
    dataSource.map((data, key) => dispatch(setNotificationItemStatus({ id: data[key].id, checked: (checkAll === false) })));
  };

  const selectItems = (id: number) => {
    
    setFilter(id);
    if (id === 1) setSource(dataSource.filter((item, key) => item[key].isRead === true));
    else if (id === 2) setSource(dataSource.filter((item, key) => item[key].isRead === false));
    else setSource(dataSource);

  };
  const checkedNotification = useAppSelector(state => state.notification)

  const deleteNotifications = () => {
    dispatch(deletePermanentNotificationMessages({notificationMessagesIds: checkedNotification}))
  }
  const markAsReadNotifications = () => {
    dispatch(markAsReadPermanentNotificationMessages({notificationMessagesIds: checkedNotification}))
  }

  useEffect(() => {
    setCheckAll(dataSource?.length && (checkedLength === dataSource?.length));
  }, [checkedLength, dataSource])

  useEffect(() => {
      setGetUne(true);
      let tempData: { [key: string]: PermanentNotificationItem }[] = [];
      permanentNotification?.value?.payload?.map((notif, key) => (tempData.push({ [key]: notif })))
      setDataSource(tempData);
      setSource(tempData);
  }, [permanentNotification, getUne])

  return (
    <>
      <div className={"notifications"}>
        <PermanentNotificationComponentToolsbar filter={filter}
          close={close} checkAll={checkAll} checkedLength={checkedLength} checkAllNotification={checkAllNotification}
          selectItems={selectItems} deleteNotifications={deleteNotifications} markAsReadNotifications={markAsReadNotifications} />
        {(permanentNotification.pending) ? <div className="px-4 w-full text-center notif-shim"><ShimmerText /></div> :
          (permanentNotification?.value?.payload?.length > 0) ? 
          <ListViewComponent
            id="notifications-list"
            dataSource={source?.length > 15 ? source?.slice(0, 15) : source}
            cssClass="e-list-template px-3"
            template={itemNotification as any}
          ></ListViewComponent> : <PermanentNoNotifications />
        }
        {source && source.length > 15 && <div className="view-more text-center py-1 cursor-pointer text-sm">{commonLocalizer("MODULE_COMMON_NOTIFICATIONS_ACTIONS_VIEW_MORE ")}</div>}
      </div>
    </>
  );
};
export default PermanentNotificationsComponent;
