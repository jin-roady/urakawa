// Lucideアイコンの初期化
document.addEventListener("DOMContentLoaded", () => {
  // Lucideアイコンをインポートまたは宣言する
  const lucide = window.lucide // グローバル変数として存在する場合

  lucide.createIcons()

  // 現在の年を設定
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // アコーディオンの機能
  const accordionTriggers = document.querySelectorAll(".accordion-trigger")

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const content = trigger.nextElementSibling
      const isExpanded = trigger.getAttribute("aria-expanded") === "true"

      // 現在のアコーディオンの状態を切り替え
      trigger.setAttribute("aria-expanded", !isExpanded)

      if (isExpanded) {
        content.classList.add("hidden")
      } else {
        content.classList.remove("hidden")
      }
    })
  })
})

