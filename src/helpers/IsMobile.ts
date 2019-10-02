export class IsMobile {
  public static any() {
    if (!navigator) {
      return false;
    }
    return (
      this._Android() ||
      this._BlackBerry() ||
      this._iOS() ||
      this._Opera() ||
      this._Windows()
    );
  }
  private static _Android() {
    return navigator.userAgent.match(/Android/i);
  }
  private static _BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  }
  private static _iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }
  private static _Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  }
  private static _Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  }
}
