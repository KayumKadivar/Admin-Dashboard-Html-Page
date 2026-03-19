$(function () {
  const sidebarHtml = `
    <aside class="app-sidebar-wrap">
      <div class="admin-sidebar" id="adminSidebar">
        <!-- Logo -->
        <div class="admin-sidebar-logo">
          <img src="../assets/images/gnfc-full-logo.png" alt="GNFC" class="logo-full">
          <img src="../assets/images/gnfc-sidebar-logo-short.png" alt="GNFC" class="logo-short" style="display: none;">
        </div>

        <!-- Navigation List -->
        <div class="admin-sidebar-section mt-12px">
          <a class="admin-sidebar-link" data-nav-key="privilege" data-tooltip="Privilege">
            <i class="ph ph-shield-check"></i>
            <span>Privilege</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="default_privilege" data-tooltip="Default Privilege">
            <i class="ph ph-shield-star"></i>
            <span>Default Privilege</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="user_privilege" data-tooltip="User Privilege">
            <i class="ph ph-user-check"></i>
            <span>User Privilege</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="plants" data-tooltip="Plants">
            <i class="ph ph-factory"></i>
            <span>Plants</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="modules" data-tooltip="Modules">
            <i class="ph ph-puzzle-piece"></i>
            <span>Modules</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="user" data-tooltip="User">
            <i class="ph ph-user-circle"></i>
            <span>User</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="user_plants" data-tooltip="User-Plants">
            <i class="ph ph-tree-structure"></i>
            <span>User-Plants</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="user_email" data-tooltip="User-Email">
            <i class="ph ph-envelope"></i>
            <span>User-Email</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="change_password" data-tooltip="Change Password">
            <i class="ph ph-key"></i>
            <span>Change Password</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="reset_password" data-tooltip="Reset Password">
            <i class="ph ph-arrow-counter-clockwise"></i>
            <span>Reset Password</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="admin_member" data-tooltip="Admin Member">
            <i class="ph ph-users-three"></i>
            <span>Admin Member</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="new_update_popup" data-tooltip="New Update Popup">
            <i class="ph ph-bell"></i>
            <span>New Update Popup</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="whats_new" data-tooltip="What's new">
            <i class="ph ph-sparkle"></i>
            <span>What's new</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="mail_schedule" data-tooltip="Mail Schedule">
            <i class="ph ph-calendar-check"></i>
            <span>Mail Schedule</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="login_info" data-tooltip="Login Info">
            <i class="ph ph-signpost"></i>
            <span>Login Info</span>
          </a>
          <a class="admin-sidebar-link" data-nav-key="ex_dms_space" data-tooltip="Space for Ex-DMS">
            <i class="ph ph-folder-open"></i>
            <span>Space for Ex-DMS</span>
          </a>
        </div>

        <div class="admin-sidebar-footer">
          <a class="admin-sidebar-exit" href="../../index.html" data-tooltip="Exit">
            <i class="ph ph-sign-out"></i>
            <span>Exit</span>
          </a>
        </div>
        </div>

    </aside>
  `;

  // Remove existing static sidebar to avoid duplication
  $(".app-sidebar-wrap").remove();
  $(".app-layout-root").prepend(sidebarHtml);

  // Set active class based on current page
  const path = window.location.pathname;
  $(".admin-sidebar-link").removeClass("active");

  if (path.includes("admin_dashboard.html")) {
    $('[data-nav-key="admin_dashboard"]').addClass("active");
  } else if (path.includes("user_privilege.html")) {
    $('[data-nav-key="user_privilege"]').addClass("active");
  } else if (path.includes("default_privilege.html")) {
    $('[data-nav-key="default_privilege"]').addClass("active");
  } else if (path.includes("privilege.html")) {
    $('[data-nav-key="privilege"]').addClass("active");
  } else if (path.includes("plants.html")) {
    $('[data-nav-key="plants"]').addClass("active");
  } else if (path.includes("modules.html")) {
    $('[data-nav-key="modules"]').addClass("active");
  } else if (path.includes("user.html")) {
    $('[data-nav-key="user"]').addClass("active");
  }

  // Click handler for navigation (using event delegation)
  $(document).on("click", ".admin-sidebar-link", function () {
    const key = $(this).attr("data-nav-key");
    if (key) {
      window.location.href = key + ".html";
    }
  });

  // Inject Toggle Button into Header if not exists
  if ($("#sidebarToggleBtn").length === 0) {
    $(".app-header-group").prepend(`
      <button id="sidebarToggleBtn" class="ui-btn-icon" title="Toggle Sidebar">
        <i class="ph ph-list font-20px"></i>
      </button>
    `);
  }

  // Click handler for Collapse support
  $(document)
    .off("click", "#sidebarToggleBtn")
    .on("click", "#sidebarToggleBtn", function () {
      $("body").toggleClass("sidebar-collapsed");
    });
});
