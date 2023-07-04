import { Page, expect, test } from "@playwright/test";
import { SearchHotelInterface } from "../../interfaces/searchHotelInterface";
import { SearchReservationTasks } from "../../tasks/searchReservationTasks";

test.beforeEach(async ({ page }) => {
    await page.goto('https://demos.devexpress.com/rwa/dxhotels/');
});

function getdate (year:number, month:number, day:number, daysLater:number):string {
    const date = new Date(year, (month-1), (day+daysLater))
    console.log('***********fecha es: '+date.toUTCString().substring(5,16))
    return date.toUTCString().substring(5,16);
}

test.describe('search hotel', ()=>{
    const date = new Date();
    const array:string[] = date.toLocaleDateString().split('/');
  
    const data: SearchHotelInterface = {
        location: 'Las Vegas, USA',
        checkIn: getdate(+array[2],+array[1],+array[0],2),
        checkOut: getdate(+array[2],+array[1],+array[0],7),
        rooms: '2',
        adults: '3',
        childrens: '2'
    }

    test('user search reservation', async ({page})=>{
        const searchReservation = new SearchReservationTasks(page, data);
        await searchReservation.searchReservation();
        await expect(page.getByText('Casino World Resort')).toBeVisible();
        await page.getByText('Casino World Resort').screenshot({ path: 'screenshot.png' });
    })

});

