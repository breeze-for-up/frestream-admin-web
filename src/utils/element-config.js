import {Container, 
    Header, 
    Main, 
    Aside, 
    Row, 
    Button,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Table,
    TableColumn
} from 'element-ui'

const cs = [
    Container, 
    Header, 
    Main, 
    Aside, 
    Row, 
    Button,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Table,
    TableColumn
]

export default {
    install(Vue){
        cs.map(c => Vue.use(c))
    }
}
