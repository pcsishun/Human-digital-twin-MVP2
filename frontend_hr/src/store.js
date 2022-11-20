import { createStore } from 'vuex' 

export default createStore({
    state: {
        alertNotic:false,
        showPopupFilter: false,
        cssMenuOpen:"set-menu-open", // set-menu-close
        buinessUnit:"",
        listComment:[
            {
                dateTime: "19/11/2022",
                shortText: "This is test comment ...",
                text: "This is test comment show test longer text 1234567890 testing by developer."
            }
        ]
        
    },
    mutations:{

    }
});
