describe('template spec', () => {
  it('harveynorman', () =>{
    // Go to product page
  cy.visit("https://harveynorman.com.au/shokz-opencomm2-uc-usb-a-bone-conduction-stereo-bluetooth-headset.html")
  cy.get("h1[data-testid='product-name']").should('contain', 'Shokz OpenComm2 UC USB-A Bone Conduction Stereo Bluetooth Headset')
  
  // Add product to cart
  cy.get("button[data-testid='add-to-cart']").click()
  
  // Go to cart
  cy.wait(10000)
  cy.get("div[data-testid='cart-icon']").click()
  
  // validate cart page
  cy.url().should('include', 'checkout/cart')
  
  // Enter postcode
  cy.get("#atlas_pickup").click()
  cy.get("#atlas_scheduled_suburb-postcode-txt").type("2077 ASQUITH")
  
  // Select the first option from the suburbs dropdown
  cy.get("#atlas_scheduled_suburb-postcode-txt_listbox").click()
  
  // Select the first available time slot
  cy.get("dd > div:nth-child(1) #s_method_atlas_scheduled").click()
  
  // Validate the cart total
  cy.get("strong[class='price']").should('contain', '$')
  })
})


