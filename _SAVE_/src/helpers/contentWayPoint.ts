export const contentWayPoint = () => {
  if (!$) { return; }
  $(".animate-box").waypoint(
    function(direction: any) {
      if (direction === "down" && !$(this.element).hasClass("animation-end")) {
        $(this.element).addClass("animated");
        $("body .animate-box.animated").each(function(k: any) {
          const el = $(this);
          setTimeout(() => {
            const effect = el.data("animate-effect");
            this.classList.add(effect || "fadeInUp", "faster");

            const handleAnimationEnd = () => {
              this.classList.remove("animated", effect || "fadeInUp", "faster");
              this.classList.add("animation-end");
              this.removeEventListener("animationend", handleAnimationEnd);
            };
            this.addEventListener("animationend", handleAnimationEnd);
          }, k * 100);
        });
      }
    },
    { offset: "85%" }
  );
};
