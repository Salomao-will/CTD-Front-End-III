import { Link, Outlet } from 'react-router-dom'
import './style.scss'

export function MainLayout() {
  return (
    <div className='main-layout-component'>
      
      <header className='main-layout-component-header'>

        <h1>Certified Tech Developer - Digital House - Terceiro Bimestre - React</h1>

      </header>

      <aside className='main-layout-component-aside'>

        <h2>Aulas</h2>

        <ul>

          <li>
            <Link to="seccondClass">Segunda aula</Link>
          </li>

          <li>
            <Link to='thirdClass'>Terceira aula</Link>
          </li>

          <li>
            <Link to='fourthClass'>Quarta aula</Link>
          </li>

          <li>
            <Link to='fifthClass'>Quinta aula</Link>
          </li>

          <li>
            <Link to='sevenClass'>Sexta aula</Link>
          </li>

          <li>
            <Link to='thirteenthClass'>Sétima aula</Link>
          </li>

          <li>
            <Link to='fourteenthClass'>Décima Terceira aula</Link>
          </li>

          <li>
            <Link to='fifteenthClass'>Décima Quarta aula</Link>
          </li>

        </ul>

      </aside>

      <main className='main-layout-component-main'>
        <h2>As coisa vai aparecer aqui</h2>
        <Outlet />
      </main>
    </div>
  )
}