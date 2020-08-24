import Home from '@/views/Home'
import SingleBook from '@/views/SingleBook'
import InsertBook from '@/views/InsertBook'
import UpdateBook from '@/views/UpdateBook'
import Author from '@/views/Authors'
import News from '@/views/News'
import Login from '@/views/Login'


export default[
    {path: '/Home',  name:'Home', meta:{requiresAuth:true}, component : Home },
    {path: '/Book/:id',name: 'bookid',component : SingleBook},
    {path: '/Insert', component : InsertBook},
    {path: '/Update/:id',name: 'updateBook', component : UpdateBook},
    {path: '/Authors/',name: 'Authors', component : Author},
    {path: '/News/',name: 'News', component : News},
    {path: '/Login',name: 'Login', component : Login},
]  