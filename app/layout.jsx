import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: 'promptly',
    description: 'discover the best prompts catered by a large community',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en"> 
    <body>
        <div className="main">
            <div className="gradient"/>
            <main className='app'>
              <Nav />
                {children}
            </main>
        </div>
    </body>
    </html>
        
  )
}

export default RootLayout
