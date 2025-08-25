import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <main style={{ padding: '2rem', whiteSpace: 'pre-line', lineHeight: '1.8' }}>
      <h2 style={{ textAlign: 'center' }}>{t('title')}</h2>
      <section style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
        <p>{t('warning')}</p>
      </section>
    </main>
  )
}

export default Home
