import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'


export default function MetaManager() {
  const { t } = useTranslation()

  return (
    <HelmetProvider>
      <Helmet>
        <title>{ t('meta.title') }</title>
        <meta name="description" content={ t('meta.description') } />
        <meta name="language" content={ t('meta.language') } />

        <meta property="og:site_name" content="Luc Maggiotto"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://lucmagg.github.io/Portfolio"/>
        <meta property="og:title" content={ t('meta.ogTitle' )}/>
        <meta property="og:description" content={ t('meta.description') }/>
        <meta property="og:image" content="https://lucmagg.github.io/Portfolio/Me.jpg"/>

        <meta name="twitter:site" content="@LucMagg"/>
        <meta name="twitter:title" content={ t('meta.ogTitle') }/>
        <meta name="twitter:description" content={ t('meta.description') }/>
        <meta name="twitter:url" content="https://lucmagg.github.io/Portfolio"/>
        <meta name="twitter:image" content="https://lucmagg.github.io/Portfolio/Me.jpg"/>
        <script type="application/ld+json">{ t('meta.script') }</script>
        
      </Helmet>
    </HelmetProvider>
  )

}