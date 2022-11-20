import { createStore } from 'vuex' 

export default createStore({
    state: {
        alertNotic:false,
        showPopupFilter: false,
        showPopupEmployee: false,
        popupEmployeeDetail:{
            pic:"",
            name:"",
            department:"",
            position:"",
            alertStatus:null
        },
        cssMenuOpen:"set-menu-open", // set-menu-close
        buinessUnit:"",
        statusSelect:"all",
        departmentSelect:"all",
        positionSelect:"all",
        listComment:[
            {
                dateTime: "19/11/2022",
                shortText: "This is test comment ...",
                text: "This is test comment show test longer text 1234567890 testing by developer."
            }
        ],
        listEmployee:[
            {
                pic:"",
                name:"Jantarat Jaroensin",
                department: "IT",
                positon: "IT manager",
                alertStatus: false
            },
            {
                pic:"",
                name:"Anon Intaraprasith",
                department: "IT",
                positon: "Fullstack developer",
                alertStatus: true
            },
            {
                pic:"",
                name:"Praewa Sirirakkosol",
                department: "IT",
                positon: "Fullstack developer",
                alertStatus: false
            },
            {
                pic:"",
                name:"Pada Julapat",
                department: "IT",
                positon: "Fullstack developer",
                alertStatus: false
            },

        ]
        
    },
    mutations:{

    }
});
