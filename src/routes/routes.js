import Home from '@/views/Home'
import SingleBook from '@/views/SingleBook'
import InsertBook from '@/views/InsertBook'
import UpdateBook from '@/views/UpdateBook'
import Author from '@/views/Authors'

export default[
    {path: '/Home', component : Home},
    {path: '/Book/:id',name: 'bookid',component : SingleBook},
    {path: '/Insert', component : InsertBook},
    {path: '/Update/:id',name: 'updateBook', component : UpdateBook},
    {path: '/Authors/',name: 'Authors', component : Author}


]  