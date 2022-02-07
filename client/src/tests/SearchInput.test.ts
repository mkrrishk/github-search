/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import SearchInput from '@/components/SearchInput.vue'

describe('GitHub Search Page Tests', () => {
  it('Should Search Input on Initial Load', async () => {
    render(SearchInput)
    const dateInputElement = await screen.findByTestId(/search-input/i)
    expect(dateInputElement).not.toBeNull
  })
})
