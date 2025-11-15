'use client';

import Select from 'react-select';
import { GuessOption } from '../types/SelectOption';

export default function GuessDropdown({ options }: {
  options: GuessOption[];
}) {
  return(
    <Select options={options}
      placeholder="Select an album..."
    />
  )
}