export class LocalitiesInBnglr{
    constructor(page){
        this.page=page;
        this.MBadvicehover = page.getByRole("link", { name: "MB Advice NEW" });
        this.FOLocalitiesInBnglr = page.getByRole("link", { name: "Localities in Bangalore" });
    }

    async hoverOnMbAdvice() {
        await this.MBadvicehover.hover();
    }

    
async clickLocalitiesInBnglr() {
  const [popup] = await Promise.all([
    this.page.waitForEvent('popup'),
    this.FOLocalitiesInBnglr.click()
    
  ]);
  return popup;
}

}