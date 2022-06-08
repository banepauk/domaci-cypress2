class AllGaleries {
    get loginBtn(){
        return cy.get('.nav-link').eq(1);
    }

    get registerBtn(){
        return cy.get('.nav-link').eq(2);
    }

    get searchInput(){
        return cy.get('.form-control');
    }

    get filterBtn(){
        return cy.get('.input-button');
    }

    get firstGalerry(){
        return cy.get('h2').eq(0);
    }

    get secondGallery(){
        return cy.get('h2').eq(1);
    }
    
    get thirdGallery(){
        return cy.get('h2').eq(2);
    }

    get fourthGallery(){
        return cy.get('h2').eq(3)
    }

    get fifthGallery(){
        return cy.get('h2').eq(4)
    }

    get sixthGallery(){
        return cy.get('h2').eq(5);
    }

    get loadMoreBtn(){
        return cy.get('.btn-custom')
    }
    search (searchInput, filterBtn){
        this.searchInput.type(searchInput)
        this.filterBtn.click()
    }
}
export const allGaleries = new AllGaleries();