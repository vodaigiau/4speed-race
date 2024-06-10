import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'

import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default async function RecoverPassword() {
  return (
    <section className={classes.RecoverPassword}>
      <div className={classes.heroImg}>
        <Link href="/">
          <Image
            src="/4speed race-white.svg"
            alt="logo"
            width={100}
            height={10}
            className={classes.logo}
          />
        </Link>
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <h3>Welcome to our Auditorium</h3>
            <Image src="/assets/icons/hand.png" alt="hand" width={30} height={30}/>
          </div>

          <p>Please Login Here</p>

          <RecoverPasswordForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
