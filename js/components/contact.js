/* ============================================================
   COMPONENT — CONTACT FORM
============================================================ */

(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    firstName: { el: form.querySelector('#firstName'), required: true,  label: 'First Name' },
    lastName:  { el: form.querySelector('#lastName'),  required: true,  label: 'Last Name' },
    email:     { el: form.querySelector('#email'),     required: true,  label: 'Email Address', type: 'email' },
    phone:     { el: form.querySelector('#phone'),     required: false, label: 'Phone' },
    market:    { el: form.querySelector('#market'),    required: false, label: 'Market' },
    budget:    { el: form.querySelector('#budget'),    required: false, label: 'Budget' },
    message:   { el: form.querySelector('#message'),   required: false, label: 'Message' },
  };

  // ---- Validation ----
  function validateField(key) {
    const f = fields[key];
    if (!f.el) return true;

    let valid = true;
    const val = f.el.value.trim();

    if (f.required && !val) {
      valid = false;
    }
    if (f.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      valid = false;
    }

    f.el.classList.toggle('error', !valid);
    return valid;
  }

  function validateAll() {
    let allValid = true;
    Object.keys(fields).forEach(key => {
      if (!validateField(key)) allValid = false;
    });
    return allValid;
  }

  // Live validation on blur
  Object.keys(fields).forEach(key => {
    const f = fields[key];
    if (f.el) {
      f.el.addEventListener('blur', () => validateField(key));
      f.el.addEventListener('input', () => {
        if (f.el.classList.contains('error')) validateField(key);
      });
    }
  });

  // ---- Submit ----
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateAll()) return;

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    // Simulate async submit (replace with real API call / Netlify Forms / etc.)
    setTimeout(() => {
      showSuccess();
    }, 1200);
  });

  function showSuccess() {
    form.innerHTML = `
      <div class="form__success" style="display:block;">
        <h3>Thank You</h3>
        <p>Your enquiry has been received. A senior advisor will be in touch within 24 hours.</p>
      </div>
    `;
  }
})();
