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
    TableColumn,
    Pagination,
    Input
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
    TableColumn,
    Pagination,
    Input
]

export default {
    install(Vue){
        cs.map(c => Vue.use(c))
    }
}
