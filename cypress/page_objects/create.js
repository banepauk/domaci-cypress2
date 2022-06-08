class CreateGallery {
    get titleInput(){
        return cy.get('#title');
    }

    get descriptionInput(){
        return cy.get('#description');
    }

    get imageUrl(){
        return cy.get('.input-group > .form-control');
    }

    get upBtn(){
        return cy.get(':nth-child(3) > .input-group > .input-group-append > :nth-child(2)');
    }

    get downBtn(){
        return cy.get('.fa-chevron-circle-down');
    }

    get addImageBtn(){
        return cy.get('form > :nth-child(3) > :nth-child(3)');
    }

    get submitBtn(){
        return cy.get('form > :nth-child(4)');
    }

    get cancelBtn(){
        return cy.get('form > :nth-child(5)');
    }

    get newImgUrl(){
        return cy.get(':nth-child(3) > .input-group > .form-control')
    }

    descriptionWith1000Char(titleInput, descriptionInput, imageUrl, submitBtn){
        this.titleInput.type(titleInput);
        this.descriptionInput.type(descriptionInput);
        this.imageUrl.type(imageUrl);
        this.submitBtn.click();
    }

    withoutTitle(descriptionInput,imageUrl,submitBtn){
        this.descriptionInput.type(descriptionInput);
        this.imageUrl.type(imageUrl);
        this.submitBtn.click();
    }

    titleContainLess2character(titleInput,descriptionInput, imageUrl, submitBtn){
        this.titleInput.type(titleInput);
        this.descriptionInput.type(descriptionInput);
        this.imageUrl.type(imageUrl);
        this.submitBtn.click();
    }

    wrongUrlFormat(titleInput, descriptionInput, imageUrl, submitBtn){
        this.titleInput.type(titleInput);
        this.descriptionInput.type(descriptionInput);
        this.imageUrl.type(imageUrl);
        this.submitBtn.click();
    }

    allEmptyFields(submitBtn){
        this.submitBtn.click();
    }

    oneImgWithoutDescription(titleInput, imageUrl, submitBtn){
        this.titleInput.type(titleInput);
        this.imageUrl.type(imageUrl);
        this.submitBtn.click();
    }

    oneImgWithDescription(titleInput, descriptionInput, imageUrl, submitBtn){
        this.titleInput.type(titleInput);
        this.descriptionInput.type(descriptionInput);
        this.imageUrl.type(imageUrl);
        this.submitBtn.click();
    }

    twoImage(titleInput, descriptionInput, imageUrl, addImageBtn,newImgUrl, submitBtn){
        this.titleInput.type(titleInput);
        this.descriptionInput.type(descriptionInput);
        this.imageUrl.type(imageUrl);
        this.addImageBtn.click();
        this.newImgUrl.type(imageUrl);
        this.submitBtn.click();
    }

    getSecondImageOnFirstPlaceUsingArrow(titleInput, descriptionInput, imageUrl,addImageBtn, newImgUrl, upBtn, submitBtn){
        this.titleInput.type(titleInput);
        this.descriptionInput.type(descriptionInput);
        this.imageUrl.type(imageUrl);
        this.addImageBtn.click();
        this.newImgUrl.type(imageUrl);
        this.upBtn.click();
        this.submitBtn.click();
    }
}
export const create = new CreateGallery();