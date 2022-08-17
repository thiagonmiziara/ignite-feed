import { Header } from '..'
import { render, screen } from '../../../utils/test.utils'

describe('Header', () => {
  it('should render correctly', () => {
    render(<Header />)
    const logoHeader = screen.getByRole('img', {
      name: /logotipo do ignite/i,
    })

    const titleHeader = screen.getByText(/ignite feed/i)

    expect(logoHeader).toBeInTheDocument()
    expect(titleHeader).toBeInTheDocument()
  })
})
