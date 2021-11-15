const DefaultSort = {
    NEWEST: 'Nuevo',
    OLDEST: 'Antiguo'
}

const UserSort = {
    ...DefaultSort,
    NAME: 'Nombre',
    EMAIL: 'Email',
    LAST_ACTIVE: 'Última actividad'
}

const CategorySort = {
    ...DefaultSort,
    NAME: 'Nombre'
}

const ProductSort = {
    ...DefaultSort,
    NAME: 'Nombre',
    LOW_TO_HIGH: 'bajo a alto',
    HIGH_TO_LOW: 'alto a bajo'
}

const TableSort = {
    ...DefaultSort,
    NAME: 'Nombre'
}

module.exports = {
    DefaultSort,
    UserSort,
    CategorySort,
    ProductSort,
    TableSort
}