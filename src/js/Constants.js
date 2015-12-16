/**
 * Created by austinsprawls on 12/16/15.
 */
import keyMirror from 'react/lib/keyMirror';

export default {
    // event name triggered from store, listened to by views
    CHANGE_EVENT: 'change',

    // Each time you add an action, add it here... They should be past-tense
    ActionTypes: keyMirror({
        TASK_ADDED: null
    })
};
