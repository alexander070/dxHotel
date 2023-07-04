import { Page, expect } from "@playwright/test";
import { SearchHotelInterface } from "../interfaces/searchHotelInterface";
import { SearchHotelPage} from "../pages/hotelSearch/searchHotelPage";
import { Search } from "../interaction/searchOffer";

export class SearchReservationTasks{
    readonly page:Page;
    readonly data:SearchHotelInterface;
    readonly searchHotel: SearchHotelPage;
    readonly searchOffer: Search;

    constructor(page:Page, data:SearchHotelInterface){
        this.page = page;
        this.data = data;
        this.searchHotel = new SearchHotelPage(page);
        this.searchOffer = new Search(page);
    }

    async searchReservation(){
        await this.searchHotel.getLocation().click();
        await this.searchHotel.getLocation().fill(this.data.location);
        await this.page.keyboard.press('Enter');
        await this.searchHotel.getCheckIn().fill(this.data.checkIn);
        await this.searchHotel.getCheckOut().fill(this.data.checkOut);
        await this.searchHotel.getRooms().dblclick();
        await this.searchHotel.getRooms().fill(this.data.rooms);
        await this.searchHotel.getAdults().dblclick();
        await this.searchHotel.getAdults().fill(this.data.adults);
        await this.searchHotel.getChildren().dblclick();
        await this.searchHotel.getChildren().fill(this.data.childrens);
        await this.searchHotel.getSearchBtn().click();
        await this.searchOffer.offert();
  
    }

    async pageCurrent(){
        const pageCurrent:number = await this.searchHotel.getPageCurrent().count();
    }

    async pageNoSelected(){
        const pageNoselected:number = await this.searchHotel.getPageNoSelected().count();
    }



}