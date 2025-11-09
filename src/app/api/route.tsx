import { NextResponse } from 'next/server'
import React from 'react'

export const GET=()=> {
  return NextResponse.json({ok:true,message:"This is Awosome."})
}


