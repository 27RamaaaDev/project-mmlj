// Tailwind Configuration
// Ini akan dibaca oleh script Tailwind CDN di index.html

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                mmlj: {
                    blue: '#003366',    // Deep Corporate Blue
                    lightBlue: '#0056b3',
                    red: '#D32F2F',     // Professional Accent Red
                    lightRed: '#FF5252',
                    grey: '#F4F6F8',    // Clean Background Grey
                }
            }
        }
    }
}