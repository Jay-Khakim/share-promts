import '@styles/globals.css'
import { Children } from 'react'

export const metadata = {
    title: "Promtopia",
    description: "Discover & Share AI Promts"
}

const RootLayout = () => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                {Children}
            </main> 
        </body>
    </html>
  )
}

export default RootLayout
