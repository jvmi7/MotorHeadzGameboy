import React from 'react';
import './Display.scss';

interface Props {
  screen: JSX.Element;
}

function Display({ screen }: Props) {
  return <div className='display__container'>{screen}</div>;
}

export default Display;
