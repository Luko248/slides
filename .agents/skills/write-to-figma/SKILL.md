---
name: write-to-figma
description: Interactive setup wizard and design generator for writing into Figma using Claude Desktop with MCP servers. Use this skill when the user wants to set up, configure, or use AI to generate/edit design system components, UI elements, color palettes, typography, or any visual design directly inside Figma. Also trigger when the user mentions Figma Console MCP, Desktop Bridge plugin, Design Systems Assistant MCP, writing to Figma, or AI-to-Figma workflows. This skill walks the user through the entire setup step by step, validates everything works, and then generates a demo design in Figma.
---

# Write to Figma with AI

This skill is an interactive wizard. Walk the user through setup one step at a time, ask for inputs, validate each step, and finish with a working demo.

## How This Works

You need 4 tools working together:

| Tool | Role | What it does |
|------|------|------|
| **Figma Desktop MCP** | **Eyes** | Reads Figma canvas — colors, layout, components. AI understands what exists. |
| **Figma Console MCP** | **Hands** | Read/write access — draws frames, generates tokens, edits components. |
| **Design Systems Assistant** | **Brain** | UX/UI best practices — accessibility, states, naming conventions. |
| **Desktop Bridge Plugin** | **Pipeline** | WebSocket bridge bypassing Figma sandbox for real-time execution. |

## Interactive Setup Flow

Guide the user through these steps sequentially. After each step, verify it worked before moving on. Use AskUserQuestion to collect inputs.

### Step 1: Check Prerequisites

Ask the user to confirm:
- Do you have **Figma Pro** (needed for Dev Mode)?
- Do you have **Claude Pro or Max** subscription?
- Is **Node.js** installed? (verify with `node --version`)
- Is **Figma Desktop** app installed (not browser)?

If Node.js is not installed, help them install it before continuing.

### Step 2: Figma Personal Access Token

Ask the user:

> I need your Figma Personal Access Token. To create one:
> 1. Open Figma → Settings → Security
> 2. Scroll to "Personal access tokens"
> 3. Click "Generate new token", name it (e.g., "Claude to Figma")
> 4. Copy the token and paste it here
>
> What is your Figma Personal Access Token?

Store the token — you will need it for the config file.

### Step 3: Clone and Build Figma Console MCP

Run these commands for the user:

```bash
cd ~/Projects  # or wherever they keep repos
git clone https://github.com/nicholasgriffintn/figma-console-mcp.git
cd figma-console-mcp
npm install
npm run build local
```

Verify the build succeeded by checking that `dist/local.js` exists:

```bash
ls -la ~/Projects/figma-console-mcp/dist/local.js
```

Store the **absolute path** to `local.js` — you need it for the config.

### Step 4: Write the Claude Desktop Config

Locate the config file:

```bash
cat ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

Read the existing config, then merge in the required MCP servers. The final config must include these servers (preserve any existing servers):

```json
{
  "mcpServers": {
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp"
    },
    "figma-console-local": {
      "command": "node",
      "args": ["<ABSOLUTE_PATH_TO>/figma-console-mcp/dist/local.js"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "<USER_TOKEN>",
        "ENABLE_MCP_APPS": "true"
      }
    },
    "design-systems": {
      "url": "https://design-systems-mcp.southleft.com/mcp"
    }
  }
}
```

Replace `<ABSOLUTE_PATH_TO>` with the real path from Step 3 and `<USER_TOKEN>` with the token from Step 2.

Write the updated config file.

### Step 5: Import the Desktop Bridge Plugin

Tell the user:

> Now import the Bridge plugin into Figma:
> 1. In Figma Desktop, go to **Plugins → Development → Import plugin from manifest**
> 2. Navigate to the `figma-console-mcp` folder you cloned
> 3. Find the `figma-desktop-bridge` subfolder and select its `manifest.json`
> 4. Run the plugin — you should see a floating window saying **"MCP Ready"**
>
> Let me know when you see "MCP Ready"!

### Step 6: Launch Figma with Remote Debugging

Tell the user to quit Figma completely, then launch it with the debugging flag:

```bash
/Applications/Figma.app/Contents/MacOS/Figma --args --remote-debugging-port=9222
```

On Linux:
```bash
figma --remote-debugging-port=9222
```

Ask the user to confirm Figma launched successfully and to re-run the Bridge plugin.

### Step 7: Restart Claude Desktop

Tell the user:

> Quit Claude Desktop completely and relaunch it. This picks up the new MCP config.
> Open a new chat and check if you see the Figma tools available.

**Important**: Since restarting Claude Desktop ends this conversation, give the user a summary of what was set up and tell them to come back and say "verify my Figma write setup" to continue.

## Verification Phase

When the user comes back after restarting (or says "verify"), run these checks:

1. **Check config file exists and is valid**:
   ```bash
   cat ~/Library/Application\ Support/Claude/claude_desktop_config.json
   ```
   Verify all 3 MCP servers are present with correct values.

2. **Check figma-console-mcp build exists**:
   ```bash
   ls -la <path>/figma-console-mcp/dist/local.js
   ```

3. **Check Node.js is available**:
   ```bash
   node --version
   ```

4. **Ask the user** to confirm:
   - Is Figma Desktop running with remote debugging?
   - Is the Bridge plugin showing "MCP Ready"?
   - Does Claude Desktop show Figma tools in the new chat?

If all checks pass, tell the user the setup is complete and move to the demo.

## Demo: Generate a Design System

Once everything is verified, offer to generate a demo design system:

> Everything looks good! Want me to generate a sample design system in Figma to prove it works?
>
> I can create:
> - A color palette (primary, secondary, neutral, semantic colors)
> - Typography scale (headings, body, captions)
> - Button components (primary, secondary, ghost — with states)
> - Form inputs (text field, checkbox, dropdown)
> - A sample card component
>
> Just tell me a primary color or style direction, or I'll use a bold default.

Then use the Figma Console MCP tools to generate the design system directly on the user's Figma canvas. Use the Design Systems Assistant to ensure proper structure, naming, and accessibility.

## Troubleshooting

If something goes wrong during setup or verification:

- **"figma-desktop" not connecting**: Figma must be launched with `--remote-debugging-port=9222`, not from the dock
- **"figma-console-local" errors**: Check that the path to `local.js` is absolute and the token is valid
- **Bridge plugin not showing "MCP Ready"**: Re-import the manifest.json and run the plugin again
- **Design Systems Assistant not responding**: It's a remote server — check internet connection
- **Claude doesn't see Figma tools**: Claude Desktop must be fully quit and relaunched after config changes
- **Token limits hit during generation**: Break complex prompts into smaller pieces (e.g., "first create the color palette", then "now add buttons")
