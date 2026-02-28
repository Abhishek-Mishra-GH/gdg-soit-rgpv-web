// popup.ts

export class Popup {
  private overlay: HTMLElement;
  private icons: HTMLElement[] = [];
  private mouseHandler?: (e: MouseEvent) => void;

  constructor() {
    this.overlay = document.createElement("div");

    this.overlay.style.position = "fixed";
    this.overlay.style.top = "0";
    this.overlay.style.left = "0";
    this.overlay.style.width = "100%";
    this.overlay.style.height = "100%";
    this.overlay.style.background = "rgba(0,0,0,0.6)";
    this.overlay.style.backdropFilter = "blur(8px)";
    this.overlay.style.display = "flex";
    this.overlay.style.alignItems = "center";
    this.overlay.style.justifyContent = "center";
    this.overlay.style.zIndex = "1000";
    this.overlay.style.transition = "opacity 0.3s ease";

    document.body.style.overflow = "hidden";
    document.body.appendChild(this.overlay);
  }

  show() {
    const isMobile = window.innerWidth < 768;

    const popup = document.createElement("div");

    popup.style.width = isMobile ? "92%" : "650px";
    popup.style.background = "#ffffff";
    popup.style.borderRadius = "20px";
    popup.style.padding = isMobile ? "18px" : "30px";
    popup.style.position = "relative";
    popup.style.boxShadow = "0 25px 60px rgba(0,0,0,0.25)";
    popup.style.fontFamily = "'Google Sans', Roboto, sans-serif";
    popup.style.overflow = "hidden";
    

    // Animations
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
      @keyframes floatSoft {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
        100% { transform: translateY(0px); }
      }

      @keyframes gradientFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes fadeSlide {
        0% { opacity: 0; transform: translateY(30px) scale(0.96); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
    `;
    document.head.appendChild(styleSheet);

    popup.style.animation =
      "fadeSlide 0.45s ease forwards, floatSoft 6s ease-in-out infinite";

    // Gradient Glow
    const glow = document.createElement("div");
    glow.style.position = "absolute";
    glow.style.inset = "-2px";
    glow.style.borderRadius = "20px";
    glow.style.zIndex = "-1";
    glow.style.filter = "blur(15px)";                           //current trial
    
    glow.style.opacity = "0.6";
    glow.style.background =
      "linear-gradient(270deg, #1265eb, #dd2211, #e4cf0e, #1ad94d)";
    glow.style.backgroundSize = "400% 400%";
    glow.style.animation = "gradientFlow 8s ease infinite";

    popup.appendChild(glow);

    // Close Button
    const closeBtn = document.createElement("div");
    closeBtn.innerHTML = "✕";

    closeBtn.style.position = "absolute";
    closeBtn.style.top = "12px";
    closeBtn.style.right = "12px";
    closeBtn.style.width = "34px";
    closeBtn.style.height = "34px";
    closeBtn.style.borderRadius = "50%";
    closeBtn.style.display = "flex";
    closeBtn.style.alignItems = "center";
    closeBtn.style.justifyContent = "center";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.background = "#f1f3f4";
    closeBtn.style.fontSize = "16px";
    closeBtn.style.transition = "all 0.3s ease";

    closeBtn.onmouseover = () => {
      closeBtn.style.background = "#ea4335";
      closeBtn.style.color = "#fff";
      closeBtn.style.transform = "rotate(90deg)";
    };

    closeBtn.onmouseout = () => {
      closeBtn.style.background = "#f1f3f4";
      closeBtn.style.color = "#000";
      closeBtn.style.transform = "rotate(0deg)";
    };

    closeBtn.onclick = () => this.destroy();

    // Icon Row
    const iconRow = document.createElement("div");
    iconRow.style.display = "flex";
    iconRow.style.gap = "12px";
    iconRow.style.marginBottom = "16px";
    iconRow.style.flexWrap = "wrap";

    const createIcon = (emoji: string) => {
      const icon = document.createElement("div");
      icon.innerText = emoji;

      icon.style.width = isMobile ? "36px" : "42px";
      icon.style.height = isMobile ? "36px" : "42px";
      icon.style.display = "flex";
      icon.style.alignItems = "center";
      icon.style.justifyContent = "center";
      icon.style.borderRadius = "12px";
      icon.style.background = "#f1f3f4";
      icon.style.fontSize = "20px";
      icon.style.transition = "transform 0.15s ease-out";

      this.icons.push(icon);
      return icon;
    };

    ["💻", "⚙️", "🚀", "🤖"].forEach((e) =>
      iconRow.appendChild(createIcon(e))
    );

    // Text Content
    const tag = document.createElement("span");
    tag.innerText = "TECH EVENT";
    tag.style.color = "#1a73e8";
    tag.style.fontSize = "12px";
    tag.style.fontWeight = "700";
    tag.style.letterSpacing = "1px";

    const title = document.createElement("h2");
    title.innerText = "Explore Innovation 🚀";
    title.style.margin = "10px 0";
    title.style.fontSize = isMobile ? "20px" : "24px";
    title.style.color = "#111";
    title.style.fontWeight = "600";
    title.style.lineHeight = "1.4";

    const desc = document.createElement("p");
    desc.innerText =
      "Join exciting hackathons, workshops, and technical sessions.";
    desc.style.color = "#3c4043";
    desc.style.fontSize = isMobile ? "13px" : "14px";
    desc.style.marginBottom = "22px";
    desc.style.lineHeight = "1.6";

    // Button
    const button = document.createElement("button");
    button.innerText = "VIEW EVENTS";

    button.style.padding = "12px 24px";
    button.style.borderRadius = "10px";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.fontWeight = "600";
    button.style.color = "#fff";
    button.style.background = "#1a73e8";
    button.style.transition = "all 0.25s ease";
    button.style.boxShadow = "0 5px 15px rgba(26,115,232,0.4)";

    button.onmouseover = () => {
      button.style.transform = "scale(1.06)";
      button.style.background = "#1765cc";
    };

    button.onmouseout = () => {
      button.style.transform = "scale(1)";
      button.style.background = "#1a73e8";
    };

    button.onclick = () => {
      window.location.href = "/events";
    };

    // Assemble
    popup.appendChild(closeBtn);
    popup.appendChild(iconRow);
    popup.appendChild(tag);
    popup.appendChild(title);
    popup.appendChild(desc);
    popup.appendChild(button);

    this.overlay.appendChild(popup);

    // 👉 Single optimized cursor tracking
    this.mouseHandler = (e: MouseEvent) => {
      this.icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();

        const dx = rect.left + rect.width / 2 - e.clientX;
        const dy = rect.top + rect.height / 2 - e.clientY;

        const dist = Math.sqrt(dx * dx + dy * dy);
        const max = 120;

        if (dist < max && dist > 0) {
          const force = (max - dist) / max;
          const moveX = (dx / dist) * force * 35;
          const moveY = (dy / dist) * force * 35;

          icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          icon.style.transform = "translate(0,0)";
        }
      });
    };

    document.addEventListener("mousemove", this.mouseHandler);
  }

  private destroy() {
    this.overlay.style.opacity = "0";

    setTimeout(() => {
      document.body.removeChild(this.overlay);
      document.body.style.overflow = "auto";

      if (this.mouseHandler) {
        document.removeEventListener("mousemove", this.mouseHandler);
      }
    }, 300);
  }
}