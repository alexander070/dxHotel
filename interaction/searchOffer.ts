import { Page, expect } from "@playwright/test";
import { SearchHotelPage } from "../pages/hotelSearch/searchHotelPage"

export class Search {
    readonly page: Page;
    readonly searchHotelPage: SearchHotelPage;
    readonly listOfPrices: number[];
    constructor(page: Page) {
        this.page = page;
        this.searchHotelPage = new SearchHotelPage(page);
        this.listOfPrices = new Array;

    }

    async offert() {
        await this.nextPage();
        await this.backPage();
    }

    async nextPage() {
        await expect(this.searchHotelPage.getNextPage()).toBeVisible();
        const pageNoSelected: number = (await this.searchHotelPage.getPageNoSelected().all()).length;

        console.log('********************** number of pages: ' + pageNoSelected);
        await this.findPrice();
        for (let i = 0; i < pageNoSelected; i++) {
            await this.searchHotelPage.getNextPage().click();
            await this.findPrice();

        }

        this.listOfPrices.forEach((row) => {
            console.log('foreach values: ' + row);
        })



    }

    async backPage() {
        await expect(this.searchHotelPage.getPrevPage()).toBeVisible();
        const pageNoSelected: number = (await this.searchHotelPage.getPageNoSelected().all()).length;
        this.selectPrice()
        await this.findPrice();

        var seePrice = await this.searchHotelPage.getSelectPrice(this.selectPrice()).isVisible();
        for (let i = 0; i < pageNoSelected; i++) {
            if(seePrice == true){
                await this.searchHotelPage.getSelectPrice(this.selectPrice()).click();
                break;
            }

            await this.searchHotelPage.getPrevPage().click();
            var seePrice = await this.searchHotelPage.getSelectPrice(this.selectPrice()).isVisible();
            
            console.log('*****************expect visible: '+ seePrice);
            await this.findPrice();
        }

    }

    async findPrice() {
        var allPrices = await this.searchHotelPage.getPrice().all();

        for (const row of allPrices) {
            await expect(row).toBeVisible();
            await row.click();
            const value = await row.textContent();
            let valueNumber: number = parseInt(value!.toString().replace('$', ''));
            if (valueNumber > 200) {
                this.listOfPrices.push(valueNumber);

            }

        }
    }


    selectPrice(): number {
        let value: number = this.listOfPrices[0];

        this.listOfPrices.forEach((price) => {
            if (price < value) {
                value = price;
            }
        });

        return value;



    }





}