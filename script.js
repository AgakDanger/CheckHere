
        // IP Publik
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('ip').textContent = data.ip;
            })
            .catch(() => {
                document.getElementById('ip').textContent = "Tidak dapat mengambil IP";
            });

        // Browser & OS Info
        function getBrowserInfo() {
            const ua = navigator.userAgent;
            let browser = "Tidak diketahui";
            if (ua.indexOf("Firefox") > -1) browser = "Mozilla Firefox";
            else if (ua.indexOf("Edg") > -1) browser = "Microsoft Edge";
            else if (ua.indexOf("Chrome") > -1) browser = "Google Chrome";
            else if (ua.indexOf("Safari") > -1) browser = "Safari";
            else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) browser = "Opera";
            return browser;
        }
        function getOSInfo() {
            const platform = navigator.platform.toLowerCase();
            if (platform.indexOf('win') > -1) return "Windows";
            if (platform.indexOf('mac') > -1) return "macOS";
            if (platform.indexOf('linux') > -1) return "Linux";
            if (/android/.test(navigator.userAgent.toLowerCase())) return "Android";
            if (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) return "iOS";
            return "Tidak diketahui";
        }
        document.getElementById('browser').textContent = getBrowserInfo();
        document.getElementById('os').textContent = getOSInfo();
        document.getElementById('ua').textContent = navigator.userAgent;
        // MAC Address tidak dapat diakses via JavaScript browser karena alasan keamanan
