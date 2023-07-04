import { Locator, Page, expect } from "@playwright/test";

export class SearchHotelPage {
    readonly page:Page;
    readonly location: Locator;
    readonly checkIn: Locator;
    readonly checkOut: Locator;
    readonly rooms: Locator;
    readonly adults: Locator;
    readonly children: Locator;
    readonly search:Locator;
    readonly prevPage:Locator;
    readonly nextPage:Locator;
    readonly pageCurrent:Locator;
    readonly pageNoSelected:Locator;
    readonly price:Locator;

    constructor(page:Page){
        this.page = page;
        this.location = page.locator('//input[@id="MainContentPlaceHolder_SearchPanel_SearchPanelLayout_LocationComboBox_I"]');
        this.checkIn = page.locator('//input[@id="MainContentPlaceHolder_SearchPanel_SearchPanelLayout_CheckInDateEdit_I"]');
        this.checkOut = page.locator('//input[@id="MainContentPlaceHolder_SearchPanel_SearchPanelLayout_CheckOutDateEdit_I"]');
        this.rooms = page.locator('//input[@id="MainContentPlaceHolder_SearchPanel_SearchPanelLayout_RoomsComboBox_I"]');
        this.adults = page.locator('//input[@id="MainContentPlaceHolder_SearchPanel_SearchPanelLayout_AdultsSpinEdit_I"]');
        this.children = page.locator('//input[@id="MainContentPlaceHolder_SearchPanel_SearchPanelLayout_ChildrenSpinEdit_I"]');
        this.search = page.locator('//div[@id="MainContentPlaceHolder_SearchPanel_SearchPanelLayout_SearchButton_CD"]');
        this.nextPage = page.locator('//img[@class="dxWeb_pNext_Metropolis"]');
        this.prevPage = page.locator('//img[@class="dxWeb_pPrev_Metropolis"]');
        this.pageCurrent = page.locator('//b[contains(@class, "dxp-num")]');
        this.pageNoSelected = page.locator('//a[contains(@class, "dxp-num")]');
        this.price = page.locator('//div[@class="price"]');
        

        

    }

    getLocation():Locator{
        return this.location;
    }

    getCheckIn():Locator{
        return this.checkIn;
    }

    getCheckOut():Locator{
        return this.checkOut;
    }

    getRooms():Locator{
        return this.rooms;
    }

    getAdults():Locator{
        return this.adults;
    }

    getChildren():Locator{
        return this.children;
    }

    getSearchBtn():Locator{
        return this.search;
    }

    getPrevPage():Locator{
        return this.prevPage;
    }

    getNextPage():Locator{
        return this.nextPage;
    }

    getPageCurrent():Locator{
        return this.pageCurrent;
    }

    getPageNoSelected():Locator{
        return this.pageNoSelected;
    }
 
    getPrice():Locator{
        return this.price;
    }

    getSelectPrice(value:number):Locator{
        return this.page.locator('//div[contains(text(), '+value+')]/following::div');
    }



    
}