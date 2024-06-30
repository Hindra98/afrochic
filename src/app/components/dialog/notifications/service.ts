
export function createNotificationService(context: { store: any }) {

    return {
       
        notifyInformation: (message: string) => notify(message, 'Info'),

        notifyError: (message: string) => notify(message, 'Error'),

        notifyWarning: (message: string) => notify(message, 'Warning'),

        notifySuccess: (message: string) => notify(message, 'Success')
    }

    function notify(message: string, type: string) {

        setTimeout(() => pushNotification(message, type));
    }

    function pushNotification(message: string, type: string) {

        const time = new Date().getTime();
        const ass = message + ' ' + type + ' ' + time;
        console.log("Time: ", ass, context);
    }
}
