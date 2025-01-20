# Customer Level User Access

HalveonCloud provides a comprehensive user access system to manage **Primary Users** and **Secondary Users**, ensuring security, flexibility, and role-based access to essential features.

---

## Primary User Access

Primary users have full access to all HalveonCloud features, including device management, configurations, and account settings. They act as administrators for their accounts and have the authority to manage secondary users.

### Features and Capabilities for Primary Users:

1. **Dashboard**:
   - Real-time temperature and humidity data visualization.
   - Historical data access for 1 Day, 7 Days, 30 Days, or 90 Days.
   - Export data in CSV format for offline analysis.

2. **Device Management**:
   - Add, delete, or modify devices.
   - View and control device statuses such as Start, Stop, and Configure.
   - Update record intervals, upload intervals, and other device configurations.

3. **Flight Mode Configuration**:
   - Add flight details, including:
     - From and To airports.
     - Flight duration and radius.
   - Confirm flight configurations.

4. **Account Management**:
   - Add and manage secondary email IDs.
   - Change account details, including primary email or password.
   - Edit profile details such as address, city, and state.

5. **User Management**:
   - Assign secondary email IDs.
   - Secondary users automatically receive email notifications upon being added.
   - Manage secondary user permissions.

6. **Full Control Over Devices**:
   - Start or stop devices as needed.
   - Set device alarm thresholds (min/max temperature and humidity).
   - Configure advanced settings such as Shadow Mode and Low Power Mode.

---

## Secondary User Access

Secondary users have a **view-only role**, enabling them to monitor data and access reports while being restricted from making any changes or configurations. This ensures that sensitive operations are handled only by the primary user.

### Features and Capabilities for Secondary Users:

1. **Dashboard**:
   - View real-time temperature and humidity data.
   - Access historical data for selected date ranges (1 Day, 7 Days, etc.).
   - Export data for reporting purposes.

2. **Device List**:
   - View details of all registered devices, including:
     - Device number, temperature, humidity, network status, battery level, and timestamps.
   - Restricted from performing actions like Start, Stop, or Configure.

3. **Device Configuration (View-Only)**:
   - View device settings such as:
     - Record intervals and upload intervals.
     - Alarm thresholds and device modes.
   - Cannot modify any configuration settings.

4. **Flight Mode Configuration (View-Only)**:
   - View flight details such as:
     - From and To airports, flight radius, and duration.
   - Adding or modifying flights is restricted.

5. **Account Information**:
   - View the account profile, including:
     - Primary email, secondary email(s), and associated devices.
   - Secondary users cannot edit or update profile details.

6. **Notifications**:
   - Receive notifications when added as a secondary user.
   - Secondary users are kept informed about system updates or changes.

---

## Permissions Matrix

| Feature                          | Primary User          | Secondary User       |
|----------------------------------|-----------------------|----------------------|
| **View Dashboard**               | ✅                    | ✅                   |
| **Configure Devices**            | ✅                    | ❌                   |
| **Start/Stop Devices**           | ✅                    | ❌                   |
| **Flight Configurations**        | ✅                    | ❌                   |
| **Add/Delete Devices**           | ✅                    | ❌                   |
| **Manage Secondary Emails**      | ✅                    | ❌                   |
| **View Device Data**             | ✅                    | ✅                   |
| **Export Data**                  | ✅                    | ✅                   |

---

## UI Highlights and Restrictions

### For Primary Users:
- **Full Access**: All buttons and actions are enabled, providing complete control over devices and configurations.
- **Customizable Settings**: Manage alarms, flight configurations, and advanced device modes.

### For Secondary Users:
- **View-Only Access**: Restricted actions are marked with tooltips such as:
  _"This feature is accessible only to the primary email ID."_
- **Simplified UI**: Focused on data monitoring and reporting.

---

## Workflow for Adding Secondary Users

1. **Adding a Secondary User**:
   - Navigate to **Account Management**.
   - Add a secondary email ID.
   - The secondary user receives an email notification with login credentials.

2. **Secondary User Login**:
   - Log in with the secondary email ID.
   - Access the view-only dashboard and restricted features.

3. **Managing Secondary Users**:
   - Primary users can remove secondary users at any time.
   - Secondary users’ actions are logged for audit purposes.

---

## Best Practices for User Management

- **Use Primary User Accounts for Configuration**:
   - Device settings, alarms, and flight configurations should always be managed by the primary user to avoid accidental changes.

- **Leverage Secondary Users for Monitoring**:
   - Assign secondary users for data monitoring and reporting, ensuring secure and efficient workflows.

- **Notifications and Alerts**:
   - Keep secondary users informed with system notifications and email alerts to enhance collaboration.

---

This document ensures clarity on the roles and permissions within HalveonCloud, enabling secure and effective device management for both primary and secondary users.
