class CityWeather extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.city = this.getAttribute("city") || "Los Angeles";
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: Arial, sans-serif;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 5px;
            width: 300px;
            background: #f9f9f9;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          .city {
            font-size: 1.5em;
            font-weight: bold;
            margin-bottom: 5px;
          }
          .temp {
            font-size: 1.2em;
            color: #007BFF;
          }
        </style>
        <div class="city">${this.city}</div>
        <div class="temp">Loading weather...</div>
      `;
    }
  
    connectedCallback() {
      this.fetchWeather(this.city);
    }
  
    static get observedAttributes() {
      return ["city"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "city" && oldValue !== newValue) {
        this.city = newValue;
        this.shadowRoot.querySelector(".city").textContent = this.city;
        this.fetchWeather(this.city);
      }
    }
  
    fetchWeather(city) {
      const tempDiv = this.shadowRoot.querySelector(".temp");
      tempDiv.textContent = "Fetching weather...";
      
      setTimeout(() => {
        const randomTemp = (Math.random() * 30 + 10).toFixed(1);
        tempDiv.textContent = `${randomTemp}°C`;
      }, 1000); 
    }
  }
  
  customElements.define("city-weather", CityWeather);
  