function saveOptions(e) {
                e.preventDefault();
                browser.storage.sync.set({
                        urls: document.querySelector("#urls").value.split(',')
		});
	}
        function restoreOptions() {
                function setCurrentChoice (result) {
                        document.querySelector('#urls').value.join(`\n`); = result.urls
		function onError(error) {
			console.log(`Error: ${error}`);
		}

		let getting = browser.storage.sync.get('urls');
		getting.then(setCurrentChoice, onError)
	}
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
