<template>
  <section>
    <h2>Field Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-field label="Label">
      <o-button label="Click me" />
    </o-field>

    <o-field label="Name">
      <o-input value="Kevin Garvey" />
    </o-field>

    <o-field
      label="Email"
      variant="danger"
      message-variant="info"
      message="This email is invalid">
      <o-input type="email" value="john@" maxlength="30" />
    </o-field>

    <o-field
      label="Username"
      variant="success"
      message="This username is available">
      <o-input value="johnsilver" maxlength="30" has-counter />
    </o-field>

    <o-field label="Password" variant="warning">
      <o-input value="123" type="password" maxlength="30" />
    </o-field>

    <o-field label="Subject" grouped>
      <o-select placeholder="Select a subject">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </o-select>
    </o-field>

    <o-field
      label="Wrong subject"
      variant="danger"
      message="Selected subject is wrong">
      <o-select placeholder="Select a subject">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </o-select>
    </o-field>
  </section>

  <section>
    <h3>Addons</h3>

    <o-field variant="danger">
      <o-input placeholder="Search..." type="search" icon="search" />
      <o-button variant="primary" label="Search" />
    </o-field>

    <o-field variant="danger">
      <o-button variant="primary" label="Search" />
      <o-input placeholder="Search..." type="search" icon="search" />
    </o-field>

    <o-field>
      <o-input placeholder="This is expanded" expanded />
      <o-button label="@gmail.com" />
    </o-field>

    <o-field>
      <o-select placeholder="Currency">
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </o-select>
      <o-input type="number" placeholder="0,00" /><o-button variant="success">
        Transfer
      </o-button>
    </o-field>

    <o-field>
      <o-button icon-left="bold" />
      <o-button icon-left="italic" />
      <o-button icon-left="underline" />
      <o-button icon-left="align-left" />
      <o-button icon-left="align-center" />
      <o-button icon-left="align-right" />

      <o-input placeholder="Search..." type="search" icon="search" />
    </o-field>

    <o-field>
      <o-button variant="primary" label="Button" />
      <o-dropdown>
        <template #trigger>
          <o-button variant="primary" icon-right="caret-down" />
        </template>

        <o-dropdown-item>Action</o-dropdown-item>
        <o-dropdown-item>Another action</o-dropdown-item>
        <o-dropdown-item>Something else</o-dropdown-item>
      </o-dropdown>
    </o-field>

    <o-field>
      <o-button variant="primary" label="Button" />
      <o-dropdown>
        <template #trigger>
          <o-button variant="primary" icon-right="caret-down" />
        </template>

        <o-dropdown-item>Action</o-dropdown-item>
        <o-dropdown-item>Another action</o-dropdown-item>
        <o-dropdown-item>Something else</o-dropdown-item>
      </o-dropdown>
      <o-button variant="primary" label="Button" />
    </o-field>

    <o-field>
      <o-input icon="search" type="search" placeholder="Search..." />
      <o-dropdown>
        <template #trigger>
          <o-button>
            <span>Filters</span>
            <o-icon icon="caret-down" />
          </o-button>
        </template>
        <o-dropdown-item value="open_issues">
          Open Issues and Pull Requests
        </o-dropdown-item>
        <o-dropdown-item value="your_issues">Your Issues</o-dropdown-item>
        <o-dropdown-item value="pull_requests">
          Your Pull Requests
        </o-dropdown-item>
        <o-dropdown-item value="everything">Everything</o-dropdown-item>
      </o-dropdown>
    </o-field>
  </section>

  <section>
    <h3>Grouped</h3>

    <o-field grouped variant="danger" message="What do you want to search?">
      <o-input placeholder="Search..." />
      <o-button variant="primary">Search</o-button>
    </o-field>

    <o-field grouped message="What do you want to search?">
      <o-input placeholder="Search..." expanded />
      <o-button variant="primary">Search</o-button>
    </o-field>

    <o-field grouped group-multiline>
      <o-input />
      <o-button>First</o-button>
      <o-button>Second</o-button>
      <o-button>Third</o-button>
      <o-button>Fourth</o-button>
      <o-button>Fifth</o-button>
      <o-button>Sixth</o-button>
      <o-button>Seventh</o-button>
      <o-button>Eighth</o-button>
    </o-field>
  </section>

  <section class="py-4 container">
    <h3>Horizontal</h3>

    <o-field
      horizontal
      label="Subject"
      variant="danger"
      message="Please enter a subject">
      <o-input name="subject" icon="pen" expanded />
    </o-field>

    <o-field horizontal label="From">
      <o-input name="name" placeholder="Name" icon="user" expanded />
      <o-input
        name="email"
        type="email"
        placeholder="nobody@nowhere.com"
        icon="at"
        expanded />
    </o-field>

    <o-field horizontal label="Topic">
      <o-select placeholder="Select a topic" icon="book">
        <option value="1">Oruga</option>
        <option value="2">Vue.js</option>
        <option value="3">UI</option>
      </o-select>
    </o-field>

    <o-field horizontal label="Message">
      <o-input type="textarea" />
    </o-field>

    <o-field horizontal>
      <o-button
        variant="primary"
        icon-left="envelope"
        label="Send message"
        outlined />
    </o-field>
  </section>

  <section>
    <h3>Slot</h3>

    <o-field horizontal>
      <template #label>
        With tooltip
        <o-tooltip label="Help text here for explanation">
          <o-icon size="small" icon="question-circle" />
        </o-tooltip>
      </template>
      <o-input size="medium" />
    </o-field>

    <o-field>
      <template #label> Label with custom <i>style</i> </template>
      <o-input />
      <template #message>
        <small>Message with custom <b>style</b> </small>
      </template>
    </o-field>
  </section>
</template>
