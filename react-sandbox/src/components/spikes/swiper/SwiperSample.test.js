import { act, getByText, render, screen } from '@testing-library/react'
import SwiperSample from './SwiperSample'

describe('Swiper Tests', () => {
    it('shows Edit and Delete button on left swipe', async () => {
        render(<SwiperSample />)

        const element = screen.getByText('item number 0')
        const swiper = element.getRootNode().querySelector('.swiper-container')
            .swiper

        swiper.slideNext(10, false)

        await act(async () => {
            expect(screen.getByText('Edit')).toBeVisible()
            expect(screen.getByText('Delete')).toBeVisible()
        })
    })
})
