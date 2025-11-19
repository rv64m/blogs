// Auto-enable zen mode for article pages
(function() {
  window.addEventListener("DOMContentLoaded", function() {
    // Check if we're on an article page
    const zenModeButton = document.getElementById("zen-mode-button");

    if (zenModeButton !== null && zenModeButton !== undefined) {
      // Automatically toggle zen mode on page load
      _toggleZenMode(zenModeButton, { scrollToHeader: false });
    }
  });
})();
